# Generated by Django 4.0.3 on 2022-05-10 02:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='appointment',
            name='vip',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='appointment',
            name='date',
            field=models.DateTimeField(),
        ),
    ]