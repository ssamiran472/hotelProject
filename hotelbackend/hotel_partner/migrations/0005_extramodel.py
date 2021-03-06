# Generated by Django 3.0.8 on 2020-07-27 12:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('hotel_partner', '0004_auto_20200725_1222'),
    ]

    operations = [
        migrations.CreateModel(
            name='Extramodel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=225)),
                ('country', models.CharField(default='India', max_length=255)),
                ('hotel_name', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hotel_partner.HotelPartners')),
            ],
        ),
    ]
