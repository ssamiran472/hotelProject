# Generated by Django 3.0.8 on 2020-07-25 04:28

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='HotelPartners',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=20)),
                ('address', models.CharField(blank=True, default='', max_length=150, null=True)),
                ('city', models.CharField(blank=True, default='', max_length=50, null=True)),
                ('featured', models.BooleanField(blank=True, default=False, null=True)),
                ('capacity', models.IntegerField(blank=True, default=0, null=True)),
                ('size', models.IntegerField(blank=True, default=0, null=True)),
                ('type_of', models.CharField(blank=True, choices=[('Single', 'single'), ('dobule', 'dobule'), ('family', 'family'), ('presidential', 'presidential')], default=1, max_length=20, null=True)),
                ('price', models.IntegerField(blank=True, default=100, null=True)),
                ('pet', models.BooleanField(blank=True, default=False, null=True)),
                ('description', models.TextField()),
                ('breakfast', models.BooleanField(blank=True, default=False, null=True)),
                ('latitude', models.CharField(blank=True, default='', max_length=50, null=True)),
                ('longitude', models.CharField(blank=True, default='', max_length=50, null=True)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='ImagesOfHotels',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('images', models.ImageField(upload_to='images/')),
                ('hotel', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='hotels', to='hotel_partner.HotelPartners')),
            ],
        ),
    ]