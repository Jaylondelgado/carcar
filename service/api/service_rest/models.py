from django.db import models
from django.forms import BooleanField
from django.urls import reverse
# Create your models here.


class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True)
    import_vin = models.CharField(max_length=200, unique=True)

    def get_api_url(self):
        return reverse("api_automobile", kwargs={"vin": self.vin})


class Technician(models.Model):
    name = models.CharField(max_length=100)
    employee_number = models.CharField(max_length=10)


class Appointment(models.Model):
    vin = models.CharField(max_length=200)
    name = models.CharField(max_length=50)
    vip = models.BooleanField(default=False)
    date = models.DateTimeField(auto_now_add=False)
    reason = models.CharField(max_length=200)
    technician = models.ForeignKey(
        Technician,
        related_name='technician',
        on_delete=models.CASCADE,
    )
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name='automobile',
        on_delete=models.CASCADE,
    )
