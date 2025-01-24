import { Component } from '@angular/core';
import { TimeframeInfo } from '../../../core/interfaces/timeframe.interface';

@Component({
  selector: 'pages-timeframe',
  standalone: true,
  imports: [],
  templateUrl: './timeframe.component.html',
  styleUrl: './timeframe.component.scss'
})
export default class TimeframeComponent {
  protected timeframeInfo: TimeframeInfo = {
    title: '⏳ Timeframe',
    description: `I take great care with every commission to ensure the best quality. However,
    please note that I have a full-time office job and can only work on
    commissions during weekends. Depending on the complexity, delivery may take
    several weeks. I appreciate your patience and understanding!`
  }
}
