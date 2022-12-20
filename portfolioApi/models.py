from django.db import models

# Create your models here.

class Base(models.Model):
    is_active = models.BooleanField(default=False)
    is_deleted = models.BooleanField(default=False)
    weight = models.IntegerField(blank=True, null=True)
    created_at = models.DateTimeField(null=True, auto_now_add=True, blank=True)
    updated_at = models.DateTimeField(null=True, auto_now=True, blank=True)



class ContactMe(Base):
    icon = models.CharField(max_length=200, blank=True, null=True, verbose_name="Icon (eg: fa -fa-twitter)")
    contact_name = models.CharField(max_length=30, blank=True, null=True, verbose_name="Contact Name (eg: twitter)")
    contact_info = models.CharField(max_length=100, blank=True, null=True, verbose_name="Contact Info (eg: johndoe@gmail.com)")

    class Meta:
        verbose_name_plural = 'Contacts Section'

    def __str__(self):
        return self.contact_name

class Jumbo(Base):
    heading = models.CharField(max_length=30, blank=True, null=True)
    name = models.CharField(max_length=100, blank=True, null=True, verbose_name="Full Name")
    job_title = models.CharField(max_length=100, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    jumbo_img = models.CharField(max_length=200, blank=True, null=True)
    contact = models.ForeignKey(ContactMe, on_delete=models.SET_NULL, null=True, blank=True)
    cv_link = models.URLField(blank=True, null=True)

    class Meta:
        verbose_name = "Jumbo Section"
        verbose_name_plural = 'Jumbo Section'

    def __str__(self):
        return self.name


class SkillSection(Base):
    language = models.CharField(max_length=40, blank=True, null=True)
    percentage = models.IntegerField(blank=True, null=True)
    icon = models.CharField(max_length=200, blank=True, null=True)

    class Meta:
        verbose_name_plural = 'Skills Section'

    def __str__(self):
        return self.language

class Project(Base):
    technology = models.CharField(max_length=100, blank=True, null=True)
    logo = models.CharField(max_length=200, blank=True, null=True)
    title = models.CharField(max_length=90, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    project_url = models.URLField(blank=True, null=True)
    live_url = models.URLField(blank=True, null=True)

    class Meta:
        verbose_name_plural = 'Projects Section'

    def __str__(self):
        return self.title

class LanguageIcons(Base):
    code = models.CharField(max_length=200, blank=True)
    name = models.CharField(max_length=100, blank=True)

    class Meta:
        verbose_name_plural = 'Languages Icons'

    def __str__(self):
        return self.code

class ServicesOffred(Base):
    icon = models.CharField(max_length=200, blank=True, null=True)
    name = models.CharField(max_length=40, blank=True, null=True)
    shadow_icon = models.CharField(max_length=200, blank=True, null=True)
    description = models.TextField(blank=True, null=True)

    class Meta:
        verbose_name_plural = 'Services Section'

    def __str__(self):
        return self.name



class SocialMediaLinks(Base):
    name = models.CharField(max_length=80, blank=True, null=True)
    icon = models.CharField(
        max_length=200, blank=True, null=True, verbose_name="Icon (eg: bi-envelope)")
    link = models.URLField(blank=True, null=True),

    class Meta:
        verbose_name_plural = 'Social Media Links'

    def __str__(self):
        return self.icon


class AboutMeSection(Base):
    heading = models.CharField(max_length=100, blank=True, null=True)
    title = models.CharField(max_length=100, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    logo = models.CharField(max_length=200, blank=True, null=True)

    class Meta:
        verbose_name_plural = 'About Me Section'

    def __str__(self):
        return self.heading