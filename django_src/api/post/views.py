from django.db.models import QuerySet
from rest_framework import status
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from blog.models import post
from . import serializer


class PostAPI(ListCreateAPIView):
    serializer_class = serializer.PostSerializer
    permission_classes = (IsAuthenticated, )

    def get_queryset(self) -> QuerySet:
        """
        This view should return the list of all the posts in the DB.
        :return: a QuerySet containing all the posts in the DB.
        """
        return post.objects.all()

    def create(self, request, *args, **kwargs) -> Response:
        obj_serializer = self.get_serializer(data=request.data)
        obj_serializer.is_valid(raise_exception=True)
        self.perform_create(obj_serializer)
        headers = self.get_success_headers(obj_serializer.data)
        return Response(
            {
                "status": True,
                "message": "Post added.",
                "data":  obj_serializer.data
            },
            status=status.HTTP_201_CREATED, headers=headers
        )


class PostRetrieveUpdateDestroyAPI(RetrieveUpdateDestroyAPIView):
    serializer_class = serializer.PostSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self) -> QuerySet:
        """
        Returns a post by its ID.
        :return: a post object by an ID, if it exists.
        An HTTP response with status 404 if it doesn't.
        """
        return post.objects.filter(id=self.kwargs.get('pk', None)).select_related('author');

    def update(self, request, *args, **kwargs) -> Response:
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        obj_serializer = self.get_serializer(instance, data=request.data, partial=partial)
        obj_serializer.is_valid(raise_exception=True)
        self.perform_update(obj_serializer)

        if getattr(instance, "_prefetched_objects_cache", None):
            instance._prefetched_objects_cache = {}

        return Response(
            {
                "status": True,
                "message": "Post update successfully.",
                "data": obj_serializer.data
            }
        )
