# Generated by Django 4.0.3 on 2022-05-10 03:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0002_appointment_vip_alter_appointment_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appointment',
            name='vin',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='automobilevo',
            name='import_vin',
            field=models.CharField(max_length=200, unique=True),
        ),
    ]
