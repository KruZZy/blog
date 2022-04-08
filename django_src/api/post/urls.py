from django.urls import path

from . import views

urlpatterns = [
    path('', views.PostAPI.as_view()),
    path('<int:pk>', views.PostRetrieveUpdateDestroyAPI.as_view())
]
