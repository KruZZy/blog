from django.urls import path, include

urlpatterns = [
    path('posts/', include('api.post.urls')),
    path('user/', include('api.user.urls')),
    path('profile/', include('api.profile.urls')),
]
