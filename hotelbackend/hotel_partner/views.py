from django.shortcuts import render
from rest_framework import generics, mixins, status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .serializers import HotelPartnerSerializers, ImagesOfHotelsSerializers, ServicesSerializer
from .models import HotelPartners, ImagesOfHotels, Services


class hotels(mixins.ListModelMixin, generics.GenericAPIView):
    serializer_class = ImagesOfHotelsSerializers
    queryset = ImagesOfHotels.objects.all()

    def get(self, request):
        return self.list(request)


@api_view(['GET'])
def images(request):
    queryset = HotelPartners.objects.all()
    serializer = HotelPartnerSerializers(
        queryset, context={'request': request}, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


class getservices(mixins.ListModelMixin, generics.RetrieveAPIView):
    serializer_class = ServicesSerializer
    queryset = Services.objects.all().order_by('id')

    def get(self, request):
        return self.list(request)
