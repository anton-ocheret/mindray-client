import Vue from 'vue';

export const setDynamicProp = (component, propertyName, propertyValue) => Vue.set(component, propertyName, propertyValue);
