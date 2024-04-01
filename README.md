# AIT Reusable Table React

A fully-fledged Table module created for React apps. Provides table component, search field, paging mode and more!

# Overview
* [Introduction](#introduction)
* [Installation](#installation)
  * [Install The Module](#installmodule)
  * [System Requirement](#systemrequirement)
* [Components](#components)
  * [Table](#table)
  * [TableRow](#tablerow)
  * [TableHead](#tablehead)
  * [TableBody](#tablebody)
  * [TableCell](#tablecell)
  * [Paging](#paging)
  * [InputSearch](#inputsearch)
* [Developers](#developers)

# Introduction

**AIT Reusable Table React** provide You to use components that adapted to AIT standards. Its fully customizeable, realabel, integrated with Tailwind CSS.

# Installation

## Install The Module

```bash
yarn add PT-Akar-Inti-Teknologi/ait_reusable_table_react
```

## Install Tailwind CSS

This project uses Tailwind CSS for UI Framework. [You can refer this link to install Tailwind CSS](https://tailwindcss.com/docs/guides/create-react-app)

## System Requirements


| Module | Version |
| --- | --- |
| Node.js | ^18.19.1 |
| React | ^18.2.0 |
| Tailwind CSS | ^3.4.1 |

---

# Components

## Table

```tsx
import { Table } from '@ait_reusable_table_react'
```

| Parameter | Type | Description | Default Value | Required |
| --- | --- | --- | --- | :---: |
| children | ReactNode | Children Component | undefined | No |
| classNames | TableClassNames | Class name that apply to table component | {container: '', table: ''} | No |
| onUpdateParams | (params: TableContextValueParams) => void | Fire while TableCell with order props was clicked | undefined | No |
| params | [x: string]: any | value that apply to TableCell with order props | undefined | No |

*All common `table` props can be apply to this component*

---

## TableRow

```tsx
import { TableRow } from '@ait_reusable_table_react'
```

*All common `tr` props can be apply to this component*

---

## TableHead

```tsx
import { TableHead } from '@ait_reusable_table_react'
```

*All common `thead` props can be apply to this component*

---

## TableBody

```tsx
import { TableBody } from '@ait_reusable_table_react'
```

*All common `tbody` props can be apply to this component*

---

## TableCell

**TableHead > TableRow > TableCell**

| Parameter | Type | Description | Default Value | Required |
| --- | --- | --- | --- | :---: | 
| children | ReactNode | Children Component | undefined | No |
| index | boolean | Set TableCell behavior as index | false | No |
| order | string | Can be used to add sort-order function | undefined | No |
| orderPrefix | string | apply prefix to order value | undefined | No |
| action | boolean | Set TableCell behavior as action | false | No |

**TableBody > TableRow > TableCell**

| Parameter | Type | Description | Default Value | Required |
| --- | --- | --- | --- | :---: | 
| children | ReactNode | Children Component | undefined | No |
| index | number | Set TableCell index | undefined | No |
| value | any | Set TableCell with validation | undefined | No |
| validate | (value: any) => boolean | custom validation | undefined | No |
| placeholder | string | appear while return validate is false | - | No |
| renderValue | (value: T) => ReactNode | custom render value | undefined | No |
| action | boolean | Set TableCell behavior as action | false | No |

*All common `tbody` props can be apply to this component*

---

## Paging

```tsx
import { Paging } from '@ait_reusable_table_react'
```

| Parameter | Type | Description | Default Value | Required |
| --- | --- | --- | --- | :---: |
| onChangePage | (data: PagingParams) => void | Fire while paging was changed | undefined | Yes |
| page | number | Current page | 1 | No |
| limit | number | Total data to display per page | 10 | No |
| total | number | Total data | 0 | No |
| loading | boolean | Props to temporary disable paging while data on load | false | No |

## Search

```tsx
import { InputSearch } from '@ait_reusable_table_react'
```

| Parameter | Type | Description | Default Value | Required |
| --- | --- | --- | --- | :---: |
| onChangeText | (value: string) => void | Fired while value is changed | undefined | No |

*All common `input` props can be apply to this component*

---

# Developers

[muhammad-f-huda-ait](https://github.com/muhammad-f-huda-ait)
