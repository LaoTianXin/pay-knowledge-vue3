<template>
  <div>id:{{ params.id }}</div>
</template>

<script setup lang="ts">
import { useParams } from '@/hooks/useParams'

type ParamsType = {
  id: string
}
const params = useParams<ParamsType>()
</script>

<style lang="scss" scoped></style>
