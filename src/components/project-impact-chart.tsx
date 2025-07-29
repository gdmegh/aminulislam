
"use client"
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList, LineChart, Line, AreaChart, Area, PieChart, Pie, Cell, Legend } from 'recharts';

interface Metric {
  name: string;
  [key: string]: number | string;
}

interface ProjectImpactChartProps {
  data: any[];
  chartType?: 'bar' | 'line' | 'area' | 'pie';
}

const COLORS = ['hsl(var(--primary))', 'hsl(var(--accent))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))'];

const renderBarChart = (data: Metric[]) => {
  const keys = data.length > 0 ? Object.keys(data[0]).filter(k => k !== 'name') : [];
  const increaseKey = keys.find(k => k.toLowerCase() === 'increase');
  const reductionKey = keys.find(k => k.toLowerCase() === 'reduction');
  const valueKey = keys.find(k => k.toLowerCase() === 'value');

  return (
    <BarChart data={data} layout="vertical" margin={{ top: 20, right: 30, left: 30, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={false} />
      <XAxis type="number" hide />
      <YAxis 
        dataKey="name" 
        type="category" 
        stroke="hsl(var(--muted-foreground))" 
        axisLine={false} 
        tickLine={false}
        width={120}
        tick={{fontSize: 14}}
      />
      <Tooltip
        cursor={{ fill: 'hsl(var(--accent) / 0.2)' }}
        contentStyle={{
          backgroundColor: "hsl(var(--background))",
          borderColor: "hsl(var(--border))",
          color: "hsl(var(--foreground))"
        }}
      />
      {increaseKey && (
        <Bar dataKey={increaseKey} fill="hsl(var(--primary))" name="Increase" radius={[0, 4, 4, 0]} barSize={30}>
            <LabelList dataKey={increaseKey} position="right" formatter={(value: number) => `${value}%`} offset={10} style={{ fill: 'hsl(var(--primary))', fontWeight: 'bold' }} />
        </Bar>
      )}
      {reductionKey && (
        <Bar dataKey={reductionKey} fill="hsl(var(--accent))" name="Reduction" radius={[0, 4, 4, 0]} barSize={30}>
            <LabelList dataKey={reductionKey} position="right" formatter={(value: number) => `${value}%`} offset={10} style={{ fill: 'hsl(var(--accent))', fontWeight: 'bold' }} />
        </Bar>
      )}
       {valueKey && (
        <Bar dataKey={valueKey} fill="hsl(var(--primary))" name="Value" radius={[0, 4, 4, 0]} barSize={30}>
            <LabelList dataKey={valueKey} position="right" formatter={(value: number) => `${value}%`} offset={10} style={{ fill: 'hsl(var(--primary))', fontWeight: 'bold' }} />
        </Bar>
      )}
    </BarChart>
  );
};

const renderLineChart = (data: any[]) => {
  const dataKey = data.length > 0 ? Object.keys(data[0]).find(k => k !== 'month') : 'value';
  return (
    <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
      <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
      <YAxis stroke="hsl(var(--muted-foreground))" />
      <Tooltip
        contentStyle={{
          backgroundColor: "hsl(var(--background))",
          borderColor: "hsl(var(--border))",
          color: "hsl(var(--foreground))"
        }}
      />
      <Legend />
      <Line type="monotone" dataKey={dataKey || 'value'} stroke="hsl(var(--primary))" strokeWidth={2} activeDot={{ r: 8 }} name="Avg. Wait Time (mins)" />
    </LineChart>
  );
};

const renderAreaChart = (data: any[]) => {
  const dataKey = data.length > 0 ? Object.keys(data[0]).find(k => k !== 'quarter') : 'revenue';
  return (
    <AreaChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <defs>
        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
      <XAxis dataKey="quarter" stroke="hsl(var(--muted-foreground))" />
      <YAxis stroke="hsl(var(--muted-foreground))" />
      <Tooltip
        contentStyle={{
          backgroundColor: "hsl(var(--background))",
          borderColor: "hsl(var(--border))",
          color: "hsl(var(--foreground))"
        }}
      />
      <Legend />
      <Area type="monotone" dataKey={dataKey || 'revenue'} stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorRevenue)" name="Revenue (USD)" />
    </AreaChart>
  );
};

const renderPieChart = (data: any[]) => (
  <PieChart>
    <Pie
      data={data}
      cx="50%"
      cy="50%"
      labelLine={false}
      outerRadius={120}
      fill="#8884d8"
      dataKey="value"
      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    <Tooltip
        contentStyle={{
          backgroundColor: "hsl(var(--background))",
          borderColor: "hsl(var(--border))",
          color: "hsl(var(--foreground))"
        }}
      />
    <Legend />
  </PieChart>
);

const ProjectImpactChart: React.FC<ProjectImpactChartProps> = ({ data, chartType = 'bar' }) => {
  const renderChart = () => {
    switch (chartType) {
      case 'line':
        return renderLineChart(data);
      case 'area':
        return renderAreaChart(data);
      case 'pie':
        return renderPieChart(data);
      case 'bar':
      default:
        return renderBarChart(data as Metric[]);
    }
  };

  return (
    <div className="w-full h-[450px] bg-card p-4 rounded-lg shadow-xl border border-border">
      <ResponsiveContainer width="100%" height="100%">
        {renderChart()}
      </ResponsiveContainer>
    </div>
  );
};

export default ProjectImpactChart;
