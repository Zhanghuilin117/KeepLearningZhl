<!--
 * @Author: Yu
 * @Date: 2020-08-18 10:43:47
 * @LastEditTime: 2020-08-18 10:54:06
 * @FilePath: \KeepLearning\Javascript\ES6\proxy.md
 * @Description: ''
-->
# Proxy

## 1. 概述

Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。