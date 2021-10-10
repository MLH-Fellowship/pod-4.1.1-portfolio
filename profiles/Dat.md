---
title: Profile
layout: profile-layout
---


<br>
{% for item in site.data.Dat %}
<div align="center">
<img src="../assets/img/{{ item.img }}" class="pod-img" width="30%"/>
</div>
{% endfor %}

## Name
{% for item in site.data.Dat %}
{{item.name}}
{% endfor %}

## Location

{% for item in site.data.Dat %}
{{item.location}}
{% endfor %}



## University

{% for item in site.data.Dat %}
{{item.university}}
{% endfor %}


## Description

{% for item in site.data.Dat %}
{{item.description}}
{% endfor %}


## Favourite Programming Languages

{% for item in site.data.Dat %}
{% for i in item.favlanguage %}
- {{i}}
{% endfor %}
{% endfor %}


## Interests Outside Of Technology

{% for item in site.data.Dat %}

{{item.interests}}

{% endfor %}