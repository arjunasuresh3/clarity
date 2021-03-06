/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { render, html } from 'lit-html';
import { createTestElement, waitForComponent, removeTestElement, componentIsStable } from '@clr/core/test/utils';
import { CdsTime } from '@clr/core/time';
import '@clr/core/time/register.js';

describe('cds-time', () => {
  let component: CdsTime;
  let element: HTMLElement;

  beforeEach(async () => {
    element = createTestElement();
    render(
      html` <cds-time>
        <label>time</label>
        <input type="time" />
        <cds-control-message>message text</cds-control-message>
      </cds-time>`,
      element
    );

    await waitForComponent('cds-time');

    component = element.querySelector<CdsTime>('cds-time');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should create component', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
  });
});
