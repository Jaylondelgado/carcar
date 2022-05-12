from django.db import models
from django.urls import reverse

# Create your models here.
class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True)
    vin = models.CharField(max_length=17)

    def __str__(self):
        return self.vin

class SalesPerson(models.Model):
    name = models.CharField(max_length=200)
    employee_number = models.CharField(max_length=10)


    def __str__(self):
        return self.name

class PotentialCustomer(models.Model):
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=300)
    phone_number = models.CharField(max_length=20)

    def __str__(self):
        return self.name

class Sale(models.Model):
    automobile = models.OneToOneField(
        AutomobileVO,
        related_name="automobile",
        on_delete=models.PROTECT
    )
    sales_person = models.ForeignKey(
        SalesPerson,
        related_name="sales_person",
        on_delete=models.PROTECT
    )
    customer = models.ForeignKey(
        PotentialCustomer,
        related_name="customer",
        on_delete=models.PROTECT
    )
    sales_price = models.CharField(max_length=20)

    def __str__(self):
        return f'{self.sales_person}, {self.automobile}'
