from django.db import models
from django.contrib.auth.models import User


TYPE = (
    ('Single', 'single'),
    ('dobule', 'dobule'),
    ('family', 'family'),
    ('presidential', 'presidential')
)


class HotelPartners(models.Model):
    name = models.CharField(default='', max_length=20)

    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    # no_of_rooms = models
    address = models.CharField(
        default='', blank=True, max_length=150, null=True
    )
    city = models.CharField(default='', max_length=50, blank=True, null=True)

    latitude = models.CharField(
        default='', max_length=50, blank=True, null=True)
    longitude = models.CharField(
        default='', max_length=50, blank=True, null=True)


class ImagesOfHotels(models.Model):
    hotel = models.ForeignKey(
        HotelPartners, on_delete=models.CASCADE, related_name='hotelimage')
    images = models.ImageField(upload_to='images/')

    featured = models.BooleanField(default=False, blank=True, null=True)
    capacity = models.IntegerField(default=0, blank=True, null=True)
    size = models.IntegerField(default=0, blank=True, null=True)
    type_of = models.CharField(
        max_length=20,
        choices=TYPE,
        default=1,
        blank=True,
        null=True
    )
    price = models.IntegerField(default=100, blank=True, null=True)
    pet = models.BooleanField(default=False, blank=True, null=True)
    description = models.TextField(default='')
    breakfast = models.BooleanField(default=False, blank=True, null=True)


class Reviews(models.Model):
    comment = models.CharField(
        default='', blank=True, null=True, max_length=200)
    send_time = models.DateTimeField(auto_now=True, null=True, blank=True)


class Extramodel(models.Model):
    hotel_name = models.ForeignKey(
        HotelPartners, on_delete=models.CASCADE, related_name='hotel_name')

    name = models.CharField(default='', max_length=225)
    country = models.CharField(default='India', max_length=255)
