
"use client"
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';

interface Metric {
  name: string;
  [key: string]: number | string;
}

interface ProjectImpactChartProps {
  data: Metric[];
}

const ProjectImpactChart: React.FC<ProjectImpactChartProps> = ({ data }) => {
  const keys = data.length > 0 ? Object.keys(data[0]).filter(k => k !== 'name') : [];
  const increaseKey = keys.find(k => k.toLowerCase() === 'increase');
  const reductionKey = keys.find(k => k.toLowerCase() === 'reduction');

  return (
    <div className="w-full h-[450px] bg-card p-4 rounded-lg shadow-xl border border-border">
      <ResponsiveContainer width="100%" height="100%">
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
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProjectImpactChart;
