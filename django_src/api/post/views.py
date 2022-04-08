from rest_framework import status
from rest_framework.generics import ListCreateAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from blog.models import post
from . import serializer


class PostAPI(ListCreateAPIView):
    query_set = post.objects.all()
    serializer_class = serializer.postSerializer
    permission_classes = (AllowAny,)

    def get_queryset(self):
        return self.query_set

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response({"status": True,
                        "message": "Post added.",
                        "data": serializer.data},
            status=status.HTTP_201_CREATED, headers=headers);



