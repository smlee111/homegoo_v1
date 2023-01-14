from django.urls import path, include
from rest_framework import routers
from . import views


urlpatterns = [
    path('register/', views.RegistLandView.as_view(), name='regist'),
    path('<int:pk>/', views.DetailLandView.as_view(), name='detail'),
    path('', views.ListLandView.as_view()),
]