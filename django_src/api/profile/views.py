from django.db.models import QuerySet
from rest_framework.generics import RetrieveUpdateDestroyAPIView

from blog.models import profile
from . import serializer


class ProfileRetrieveUpdateDestroyAPI(RetrieveUpdateDestroyAPIView):
    serializer_class = serializer.ProfileSerializer
    permission_classes = ()
    #permission_classes = (IsAuthenticated,)

    def get_queryset(self) -> QuerySet:
        """
        Returns a post by its ID.
        :return: a post object by an ID, if it exists.
        An HTTP response with status 404 if it doesn't.
        """
        return profile.objects.filter(id=self.kwargs.get('pk', None)).select_related('user');
