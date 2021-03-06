from django.db import models
from django.urls import reverse
# Create your models here.


class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True)
    import_vin = models.CharField(max_length=50)

    def get_api_url(self):
        return reverse("api_automobile", kwargs={"vin": self.import_vin})


class Technician(models.Model):
    name = models.CharField(max_length=100)
    employee_number = models.CharField(max_length=10)


class Appointment(models.Model):
    vin = models.CharField(max_length=100)
    name = models.CharField(max_length=50)
    vip = models.BooleanField(default=False)
    finished = models.BooleanField(default=False)
    date = models.DateField(null=True)
    time = models.TimeField(null=True)
    reason = models.CharField(max_length=200)
    technician = models.ForeignKey(
        Technician,
        related_name='technician',
        on_delete=models.CASCADE,
    )
