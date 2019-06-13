import React from 'react';
import Layout from '../../components/layout';
import { Card, H2, Divider, UL, Button, Checkbox, Label, InputGroup } from '@blueprintjs/core';
import './style.css';

function TodoPage(props) {
  const { items } = props;

  return (
    <Layout>
      <Card>
        <H2>TODO</H2>

        <Divider />

        <UL className="todo-list">
          {items.map(item => (
            <li className="todo-item" key={item.id}>
              <Button small icon="remove" intent="danger" className="todo-item-action" />

              {item.isEditting ? (
                <InputGroup
                  small
                  className="todo-item-text-edit"
                  placeholder="Item text..."
                  value="hola"
                />
              ) : (
                <React.Fragment>
                  <Checkbox className="todo-item-label" checked={item.isChecked} />

                  <Label className={`todo-item-label ${item.isChecked ? 'done' : ''}`}>
                    {item.text}
                  </Label>
                </React.Fragment>
              )}
            </li>
          ))}
        </UL>
      </Card>
    </Layout>
  );
}

export default TodoPage;
