import React from 'react';
import Layout from '../../components/layout';
import {
  Card,
  H2,
  Divider,
  UL,
  Button,
  Checkbox,
  Label,
  InputGroup,
  Intent,
  Callout
} from '@blueprintjs/core';
import './style.css';

function TodoPage(props) {
  const {
    items,
    onNewItem,
    onRemoveItem,
    newItemText,
    onChangeNewItemText,
    onExitEditMode,
    onEnterEditMode,
    onToggleItemComplete
  } = props;

  return (
    <Layout>
      <Card>
        <H2>TODO</H2>
        <Button text="New Item" intent={Intent.PRIMARY} icon="new-object" onClick={onNewItem} />
        <Callout intent={Intent.DANGER}>Error</Callout>
        <Divider />
        <UL className="todo-list">
          {items.map(item => (
            <li className="todo-item" key={item.id}>
              <Button
                small
                icon="remove"
                intent="danger"
                className="todo-item-action"
                onClick={() => onRemoveItem(item)}
              />

              {item.isEditting ? (
                <InputGroup
                  small
                  className="todo-item-text-edit"
                  placeholder="Item text..."
                  value={newItemText}
                  onChange={onChangeNewItemText}
                  onBlur={() => onExitEditMode(item)}
                  inputRef={ref => ref && ref.focus()}
                />
              ) : (
                <React.Fragment>
                  <Checkbox
                    className="todo-item-label"
                    checked={item.isChecked}
                    onChange={() => onToggleItemComplete(item)}
                  />

                  <Label
                    className={`todo-item-label ${item.isChecked ? 'done' : ''}`}
                    onClick={() => onEnterEditMode(item)}
                  >
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
