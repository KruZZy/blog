from django.contrib.auth.models import User
from django.db import models


# Create your models here.
class timeStampModel(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    description = models.TextField()


class post(timeStampModel):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=25)
    text = models.TextField()

    def __str__(self):
        return self.title + " (created " + str(self.created) + ")"
