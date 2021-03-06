/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { LitElement, html, css } from 'lit-element';
import { render } from 'lit-html';
import { registerElementSafely } from '@clr/core/internal';
import { createTestElement, removeTestElement } from '@clr/core/test/utils';
import { globalStyle } from './global-style.js';

export class TestElement extends LitElement {
  static get styles() {
    return css`
      :host {
        --color: red;
        --background: red;
      }
    `;
  }

  @globalStyle() globalStyles = css`
    test-global-style-decorator {
      --color: blue;
    }
  `;
}
registerElementSafely('test-global-style-decorator', TestElement);

let element: HTMLElement;
let testElement: TestElement;

describe('globalStyle decorator', () => {
  beforeEach(() => {
    element = createTestElement();
    render(html`<test-global-style-decorator></test-global-style-decorator>`, element);
    testElement = element.querySelector<TestElement>('test-global-style-decorator');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should append a style tag to element', () => {
    expect(window.getComputedStyle(testElement).getPropertyValue('--color').trim()).toBe('blue');
  });
});
