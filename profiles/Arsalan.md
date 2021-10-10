---
title: Profile
layout: profile-layout
---


<br>
{% for item in site.data.Arsalan %}
<div align="center">
<img src="../assets/img/{{ item.img }}" class="pod-img" width="30%"/>
</div>
{% endfor %}

## Name
{% for item in site.data.Arsalan %}
{{item.name}}
{% endfor %}

## Location

{% for item in site.data.Arsalan %}
{{item.location}}
{% endfor %}



## University

{% for item in site.data.Arsalan %}
{{item.university}}
{% endfor %}


## Description

{% for item in site.data.Arsalan %}
{{item.description}}
{% endfor %}


## Favourite Programming Languages

{% for item in site.data.Arsalan %}
{% for i in item.favlanguage %}
- {{i}}
{% endfor %}
{% endfor %}


## Interests Outside Of Technology

{% for item in site.data.Arsalan %}

{{item.interests}}

{% endfor %}