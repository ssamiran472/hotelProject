from django.urls import path
from . import views

urlpatterns = [
    path('', views.hotels.as_view(), name='hotels'),
    path('hotel', views.images, name='hotels'),
]
