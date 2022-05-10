from django.shortcuts import render
from .models import Technician, Appointment, AutomobileVO
from django.views.decorators.http import require_http_methods
from common.json import ModelEncoder
from django.http import JsonResponse
import json
# Create your views here.
class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        'name',
        'employee_number',
    ]

class AutomobileEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        'import_href',
        'import_vin',
    ]

class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = [
        'vin',
        'name',
        'date',
        'reason',
        'technician',
        'automobile',
    ]
    encoders = {
        'technician': TechnicianEncoder(),
        'automobile': AutomobileEncoder(),
    }

@require_http_methods(['GET', 'POST'])
def api_technicians(request):
    if request.method == 'GET':
        techs = Technician.objects.all()
        return JsonResponse(
            {'techs': techs},
            encoder=TechnicianEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            tech = Technician.objects.create(**content)
            return JsonResponse(
                tech,
                encoder=TechnicianEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {'message': 'Could not create technician'}
            )
            response.status_code = 400
            return response

@require_http_methods(["DELETE", "GET", "PUT"])
def api_technician(request, pk):
    if request.method == "GET":
        try:
            tech = Technician.objects.get(id=pk)
            return JsonResponse(
                tech,
                encoder=TechnicianEncoder,
                safe=False,
            )
        except Technician.DoesNotExist:
            response = JsonResponse ({"message": 'Does not exist'})
            response.status_code=404
            return response
    elif request.method == 'DELETE':
        try:
            tech = Technician.objects.get(id=pk)
            tech.delete()
            return JsonResponse(
                {'tech': tech},
                encoder=TechnicianEncoder
            )
        except Technician.DoesNotExist:
            return JsonResponse({'message': 'Does Not Exist'})
    else:
        try:
            content = json.loads(request.body)
            tech = Technician.objects.get(id=pk)
            props = ["name", "employee_number"]
            for prop in props:
                if prop in content:
                    setattr(tech, prop, content[prop])
            tech.save()
            return JsonResponse(
                tech,
                encoder=TechnicianEncoder,
                safe=False,
            )
        except Technician.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response

@require_http_methods(['GET', 'POST'])
def api_appointments(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentEncoder
        )
    else:
        content = json.loads(request.body)
        technician = Technician.objects.get(id=content["technician"])
        content["technician"] = technician
        appointment = Appointment.objects.create(**content)
        print(appointment)
        return JsonResponse(
            {"appointment" : appointment},
            encoder=AppointmentEncoder,
        )