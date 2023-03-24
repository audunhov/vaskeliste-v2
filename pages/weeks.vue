<template>
    <ContentSection>
        <h1>Alle uker</h1>
    </ContentSection>

    <ContentSection>
        <table class="w-full">
            <tr class="text-left border-b-slate-100 border-b">
                <th>Uke</th>
                <th>Vasker 1</th>
                <th>Vasker 2</th>
                <th>Vasker 3</th>
        </tr>
            <tr v-for="i in 52" :key="i" class="odd:bg-slate-100">
                <td><NuxtLink :to="`/week/${i}`"><span class="text-blue-600 hover:underline">{{ i }}</span></NuxtLink></td>
                <td v-for="c in getCleanersFromWeek(i)" :key="c">
                {{ c }}
                </td>
            </tr>
        </table>
    </ContentSection>
</template>