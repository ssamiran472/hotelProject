from rest_framework import serializers
from .models import HotelPartners, ImagesOfHotels, Reviews, Extramodel


class ReviewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reviews
        fields = '__all__'


class ImagesOfHotelsSerializers(serializers.ModelSerializer):
    # image_url = serializers.SerializerMethodField('get_image_url')

    class Meta:
        model = ImagesOfHotels
        fields = '__all__'

    # def get_image_url(self, obj):
    #     request = self.context.get('request')

    #     return request.build_absolute_uri(obj.images.url)


class ExtraSerialize(serializers.ModelSerializer):
    class Meta:
        model = Extramodel
        fields = '__all__'


class HotelPartnerSerializers(serializers.ModelSerializer):
    hotelimage = ImagesOfHotelsSerializers(many=True)

    class Meta:
        model = HotelPartners

        fields = ['id', 'owner', 'hotelimage', 'city', 'address']

        read_only = ['hotelimage']
