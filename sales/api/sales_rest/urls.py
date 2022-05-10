from django.urls import path
from .views import api_list_person, api_list_customer, api_list_sales, api_show_sales, api_show_person,api_show_customer

urlpatterns = [
    path("sales_persons/", api_list_person, name="api_list_persons"),
    path("sales_persons/<int:pk>/", api_show_person, name="api_show_person"),
    path("customers/", api_list_customer, name="api_list_customers"),
    path("customers/<int:pk>/", api_show_customer, name="api_show_customer"),
    path("sales/", api_list_sales, name="api_list_sales"),
    path("sales/<int:pk>/", api_show_sales, name="api_show_sale")
]
