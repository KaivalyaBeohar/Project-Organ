from django.urls import path
from myapp import views

urlpatterns = [
    path('', views.home, name='home'),
    path('register/', views.RegisterView, name='register'),
    path('login/', views.LoginView, name='login'),
    path('logout/', views.LogoutView, name='logout'),
]