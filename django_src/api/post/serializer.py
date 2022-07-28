from rest_framework import serializers

from api.user.serializer import UserSerializer
from blog.models import post


class PostSerializer(serializers.ModelSerializer):
    author = UserSerializer(many=False)

    class Meta:
        model = post
        fields = "__all__"
