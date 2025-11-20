import React from 'react';

export enum UrgencyLevel {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
  CRITICAL = 'Critical'
}

export interface MailAnalysis {
  summary: string;
  sender: string;
  category: string;
  urgency: UrgencyLevel;
  suggestedAction: string;
  draftReply: string;
  extractedDates: string[];
  sentiment: string;
}

export interface MailItem {
  id: string;
  title: string; // Usually sender or subject
  previewText: string;
  date: string;
  status: 'unread' | 'read' | 'processed';
  content: string; // Full text content for simulation
  imageUrl?: string;
}

export interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}