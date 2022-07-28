from rest_framework import serializers

from api.user.serializer import UserSerializer
from blog.models import profile


class ProfileSerializer(serializers.ModelSerializer):

    user = UserSerializer(many=False)

    class Meta:
        model = profile
        fields = ['description', 'user']
