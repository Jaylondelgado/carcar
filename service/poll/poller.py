import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "service_project.settings")
django.setup()

# Import models from service_rest, here.
from service_rest.models import AutomobileVO
# from service_rest.models import Something

# def get_automobile():
#     response = requests.get("http://inventory-api:8000/api/automobiles")
#     content = json.loads(response.content)
#     for automobile in content["autos"]:
#         print(automobile)
#         AutomobileVO.objects.update_or_create(
#             # import_href=automobile['href'],
#             defaults={
#                 'import_href': automobile["href"],
#                 'import_vin': automobile["vin"],
#             },
#         )
#         print('check if this works')

def poll():
    while True:
        print('Service poller polling for data')
        try:
            response = requests.get("http://inventory-api:8000/api/automobiles")
            content = json.loads(response.content)
            for auto in content["autos"]:
                AutomobileVO.objects.update_or_create(
                    import_href=auto['href'],
                    defaults={
                        "vin":auto["import_vin"],
                    }
                )
            # Write your polling logic, here
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(60)


if __name__ == "__main__":
    poll()
