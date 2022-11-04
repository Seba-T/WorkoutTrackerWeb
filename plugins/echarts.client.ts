import ECharts from "vue-echarts";
import { use } from "echarts/core";

// import ECharts modules manually to reduce bundle size
import { SVGRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import { GridComponent, TooltipComponent } from "echarts/components";

import { LegendComponent } from "echarts/components";
import { TitleComponent } from "echarts/components";

export default defineNuxtPlugin(({ vueApp }) => {
  use([
    SVGRenderer,
    LineChart,
    GridComponent,
    TooltipComponent,
    TitleComponent,
    LegendComponent,
  ]);

  vueApp.component("v-chart", ECharts);
});
