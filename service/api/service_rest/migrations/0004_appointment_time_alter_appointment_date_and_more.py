# Generated by Django 4.0.3 on 2022-05-10 16:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0003_alter_appointment_vin_alter_automobilevo_import_vin'),
    ]

    operations = [
        migrations.AddField(
            model_name='appointment',
            name='time',
            field=models.TimeField(null=True),
        ),
        migrations.AlterField(
            model_name='appointment',
            name='date',
            field=models.DateField(null=True),
        ),
        migrations.AlterField(
            model_name='appointment',
            name='vin',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='automobilevo',
            name='import_vin',
            field=models.CharField(max_length=50),
        ),
    ]
