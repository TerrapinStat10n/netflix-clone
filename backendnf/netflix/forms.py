from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import NfUser


class NfUserRegistrationForm(UserCreationForm):

    class Meta:
        model = NfUser
        fields = ('email', )


class NfUserChangeForm(UserChangeForm):

    class Meta:
        model = NfUser
        fields = ('email', )
