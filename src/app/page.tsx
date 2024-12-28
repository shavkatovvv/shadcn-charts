"use client";
import {
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import { ChartTwo } from "./chart_2/page";
import { ChartThree } from "./chart_3/page";
export default function Home() {
    const chartData = [
        { month: "January", desktop: 186, mobile: 80 },
        { month: "February", desktop: 305, mobile: 200 },
        { month: "March", desktop: 237, mobile: 120 },
        { month: "April", desktop: 73, mobile: 190 },
        { month: "May", desktop: 209, mobile: 130 },
        { month: "June", desktop: 214, mobile: 140 },
    ];

    const chartConfig = {
        desktop: {
            label: "Desktop",
            color: "#2563eb",
        },
        mobile: {
            label: "Mobile",
            color: "#60a5fa",
        },
    } satisfies ChartConfig;

    return (
        <div>
            <ChartContainer
                config={chartConfig}
                className="min-h-[100px] w-[1000px] ml-auto mr-auto"
            >
                <BarChart accessibilityLayer data={chartData}>
                    <XAxis
                        dataKey="month"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <CartesianGrid vertical={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Bar
                        dataKey="desktop"
                        fill="var(--color-desktop)"
                        radius={4}
                    />
                    <Bar
                        dataKey="mobile"
                        fill="var(--color-mobile)"
                        radius={4}
                    />
                </BarChart>
            </ChartContainer>
            <ChartTwo />
            <ChartThree />
        </div>
    );
}
