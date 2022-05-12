from unicodedata import name
from django.shortcuts import render
from psycopg2 import IntegrityError
from common.json import ModelEncoder
from .models import SalesPerson, PotentialCustomer, AutomobileVO, Sale
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
import json
from json import JSONEncoder
# Create your views here.
class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin", "import_href"]


class SalesPersonListEncoder(ModelEncoder):
    model = SalesPerson
    properties = ["id", "name", "employee_number"]

class PotentialCustomerListEncoder(ModelEncoder):
    model = PotentialCustomer
    properties = ["id", "name", "address", "phone_number"]

class SaleListEncoder(ModelEncoder):
    model = Sale
    properties = [
        "id",
        "automobile",
        "sales_person",
        "customer",
        "sales_price",
    ]
    encoders = {
        "automobile": AutomobileVOEncoder(),
        "sales_person": SalesPersonListEncoder(),
        "customer": PotentialCustomerListEncoder(),
    }
    
class SaleDetailEncoder(ModelEncoder):
    model = Sale
    properties = [
        "automobile",
        "sales_person",
        "customer",
        "sales_price"
    ]
    encoders = {
        "automobile": AutomobileVOEncoder(),
        "sales_person": SalesPersonListEncoder(),
        "customer": PotentialCustomerListEncoder(),
    }

@require_http_methods(["GET", "POST"])
def api_list_sales(request):
    if request.method == "GET":
        sales = Sale.objects.all()
        print(sales)
        return JsonResponse(
            {"sales": sales},
            encoder = SaleListEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            automobile_href = content["automobile"]
            automobile = AutomobileVO.objects.get(import_href=automobile_href)
            content["automobile"] = automobile
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid Vehicle id"},
                status = 400,
            )
        try:
            person_id = content["sales_person"]
            sales_person = SalesPerson.objects.get(id=person_id)
            content["sales_person"] = sales_person
        except SalesPerson.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid Sales Person"},
                status = 400
            )
        try:
            customer_id = content["customer"]
            customer = PotentialCustomer.objects.get(id=customer_id)
            content["customer"] = customer
        except PotentialCustomer.DoesNotExist:
            return JsonResponse(
                {"message": "Customer does not exist"},
                status = 400
            )
        sale = Sale.objects.create(**content)
        
        return JsonResponse(
            sale,
            encoder = SaleDetailEncoder,
            safe=False
        )

@require_http_methods(["DELETE", "GET", "PUT"])
def api_show_sales(request, pk):
    if request.method == "GET":
        sale = Sale.objects.get(id=pk)
        return JsonResponse(
            sale,
            encoder = SaleDetailEncoder,
            safe = False
        )
    elif request.method == "DELETE":
        count, _ = Sale.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})
    else:
        content = json.loads(request.body)
        try:
            automobile_href = content["automobile"]
            automobile = AutomobileVO.objects.get(import_href=automobile_href)
            content["automobile"] = automobile
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid Vehicle id"},
                status = 400,
            )
        try:
            person_id = content["sales_person"]
            sales_person = SalesPerson.objects.get(id=person_id)
            content["sales_person"] = sales_person
        except SalesPerson.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid Sales Person"},
                status = 400
            )
        try:
            customer_id = content["customer"]
            customer = PotentialCustomer.objects.get(id=customer_id)
            content["customer"] = customer
        except PotentialCustomer.DoesNotExist:
            return JsonResponse(
                {"message": "Customer does not exist"},
                status = 400
            )

        Sale.objects.filter(id=pk).update(**content)
        sale = Sale.objects.get(id=pk)
        print(sale)
        return JsonResponse(
            sale,
            encoder = SaleDetailEncoder,
            safe=False
        )


    


@require_http_methods(["GET", "POST"])
def api_list_person(request):
    if request.method == "GET":
        sales_persons = SalesPerson.objects.all()
        return JsonResponse(
            {"sales_persons": sales_persons},
            encoder = SalesPersonListEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            sales_person = SalesPerson.objects.create(**content)
            return JsonResponse(
                sales_person,
                encoder=SalesPersonListEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create sales person"}
            )
            response.status_code = 400
            return response


@require_http_methods(["DELETE", "GET", "PUT"])
def api_show_person(request, pk):
    if request.method == "GET":
        person = SalesPerson.objects.get(id=pk)
        return JsonResponse(
            person,
            encoder=SalesPersonListEncoder,
            safe=False,
        )
    elif request.method == "DELETE":
        count, _ = SalesPerson.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})
    else:
        content = json.loads(request.body)
        SalesPerson.objects.filter(id=pk).update(**content)
        person = SalesPerson.objects.get(id=pk)
        return JsonResponse(
            person,
            encoder=SalesPersonListEncoder,
            safe = False
        )


@require_http_methods(["GET", "POST"])
def api_list_customer(request):
    if request.method == "GET":
        customers = PotentialCustomer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder= PotentialCustomerListEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            customer = PotentialCustomer.objects.create(**content)
            return JsonResponse(
                customer,
                encoder=PotentialCustomerListEncoder,
                safe=False
            )
        except:
            response = JsonResponse(
                {"message": "Could not create new customer"}
            )
            response.status_code = 400
            return response

@require_http_methods(["DELETE", "GET", "PUT"])
def api_show_customer(request, pk):
    if request.method == "GET":
        customer = PotentialCustomer.objects.get(id=pk)
        return JsonResponse(
            customer,
            encoder=PotentialCustomerListEncoder,
            safe=False,
        )
    elif request.method == "DELETE":
        count, _ = PotentialCustomer.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})
    else:
        content = json.loads(request.body)
        PotentialCustomer.objects.filter(id=pk).update(**content)
        customer = PotentialCustomer.objects.get(id=pk)
        return JsonResponse(
            customer,
            encoder=PotentialCustomerListEncoder,
            safe = False
        )