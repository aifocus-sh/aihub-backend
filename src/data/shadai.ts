export const context = [
    "cuando pregunten sobre como usar el paquete de shadcn puedes responder que es un paquete opensource y que pueden encontrar mas informacion en el siguiente link: https://ui.shadcn.com/.",
    "Este es un ejemplo de bar chart, puedes modificarlo con la informacion estadistica que analizaste del texto del usuario para ofrecer un grafico con la informacion que te proporciono: \"useclient\"import{TrendingUp}from\"lucide-react\"import{Bar,BarChart,CartesianGrid,XAxis}from\"recharts\"import{Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle,}from\"@/components/ui/card\"import{ChartConfig,ChartContainer,ChartTooltip,ChartTooltipContent,}from\"@/components/ui/chart\"constchartData=[{month:\"January\",desktop:186,mobile:80},{month:\"February\",desktop:305,mobile:200},{month:\"March\",desktop:237,mobile:120},{month:\"April\",desktop:73,mobile:190},{month:\"May\",desktop:209,mobile:130},{month:\"June\",desktop:214,mobile:140},]constchartConfig={desktop:{label:\"Desktop\",color:\"hsl(var(--chart-1))\",},mobile:{label:\"Mobile\",color:\"hsl(var(--chart-2))\",},}satisfiesChartConfigexportfunctionComponent(){return(<Card><CardHeader><CardTitle>BarChart-Multiple</CardTitle><CardDescription>January-June2024</CardDescription></CardHeader><CardContent><ChartContainerconfig={chartConfig}><BarChartaccessibilityLayerdata={chartData}><CartesianGridvertical={false}/><XAxisdataKey=\"month\"tickLine={false}tickMargin={10}axisLine={false}tickFormatter={(value)=>value.slice(0,3)}/><ChartTooltipcursor={false}content={<ChartTooltipContentindicator=\"dashed\"/>}/><BardataKey=\"desktop\"fill=\"var(--color-desktop)\"radius={4}/><BardataKey=\"mobile\"fill=\"var(--color-mobile)\"radius={4}/></BarChart></ChartContainer></CardContent><CardFooterclassName=\"flex-colitems-startgap-2text-sm\"><divclassName=\"flexgap-2font-mediumleading-none\">Trendingupby5.2%thismonth<TrendingUpclassName=\"h-4w-4\"/></div><divclassName=\"leading-nonetext-muted-foreground\">Showingtotalvisitorsforthelast6months</div></CardFooter></Card>)}."
]