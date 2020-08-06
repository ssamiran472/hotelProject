from django.contrib import admin
from .models import HotelPartners, ImagesOfHotels, Reviews, Extramodel, Services
# Register your models here.

admin.site.register(HotelPartners)
admin.site.register(ImagesOfHotels)
admin.site.register(Reviews)
admin.site.register(Extramodel)
admin.site.register(Services)
