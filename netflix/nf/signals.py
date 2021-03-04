# from django.db.models.signals import post_save
# from django.contrib.auth.models import User
# from django.dispatch import receiver
# from .models import NfUser
#
#
# @receiver(post_save, sender=User)
# def create_user(sender, instance, created, **kwargs):
#     if created:
#         nfuser = NfUser(instance)
#         nfuser.save()
#         print('User created')
#
#
# @receiver(post_save, sender=User)
# def update_user(sender, instance, created, **kwargs):
#     if created is False:
#         instance.user.save()
#         print('User updated')
#
#
# post_save.connect(create_user, sender=User)
