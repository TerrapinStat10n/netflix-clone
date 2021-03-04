from rest_framework import serializers
# from django.contrib.auth.models import User
from .models import NfMovie # , NetflixUser # , NfUser
from rest_framework.authtoken.models import Token


# class NfUserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = "__all__"
#         extra_kwargs = {'password': {'write_only': True, 'required': True}}
#
#     def create(self, validated_data):
#         """
#         Create and return a new NfUsers instance, given the validated data
#         """
#         user = User.objects.create(**validated_data)
#         nfuser = NfUser(user)
#         nfuser.save()
#         Token.objects.create(user=user)
#         return user
#
#     def update(self, instance, validated_data):
#         """
#         Update and return an existing `NfUser` instance, given the validated data.
#         """
#         instance.username = validated_data.get('name', instance.username)
#         instance.email = validated_data.get('email', instance.email)
#         instance.password = validated_data.get('password', instance.password)
#         instance.save()
#         return instance


class NfMovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = NfMovie
        fields = ['id', 'name', 'link', 'description', 'category_id', 'created_at']


# class NetflixUserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = NetflixUser
#         fields = "__all__"
#         extra_kwargs = {'password': {'write_only': True, 'required': True}}
