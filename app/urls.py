from django.conf.urls import include, url
from . import views
urlpatterns = [

    # mukas 11.07.2016 - Перенаправляем на app.url
    url(r'^$', views.home, name='home_url'),
    url(r'^ajax_encode/$', views.ajax_encode, name='ajax_encode_url'),
    
    #url(r'^ajax_encode/$', views.ajax_encode, name='home_url'), 

]
