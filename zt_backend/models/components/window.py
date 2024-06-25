from pydantic import Field, BaseModel
from typing import List, Union, Optional
from zt_backend.models.components.zt_component import ZTComponent


class WindowItem(BaseModel):
    """Representation of an item within the window component."""
    component: str = Field("v-window-item", description="Vue component name")
    disabled: Optional[bool] = Field(None, description="Determines if the window item is disabled")
    # items: Union[List[Union[str, int, None]], None, str, int] = Field(..., description = "Options for the window items. Can be anything")
    childComponents: List[str] = Field(
        [], description = "List of child component ids to be placed within the Window Item"
    )
    triggerEvent: str = Field('group:selected', description="Event that is emitted when an item is selected within a group.")


class Window(BaseModel):
    """Window component provides the functionality for transitioning content from one pane to another"""
    component: str = Field("v-window", description="Vue component name")
    childComponents: List[str] = Field(
        [], description = "List of child component ids to be placed within the Window"
    )
    value: Union[List[Union[str, int, None]], None, str, int] = Field(None, description="Selected window item for the window")
    show_arrows: bool = Field(True, description="Show navigation arrows")
    next_icon: str=Field("$next", description="Icon used for the “next” button if show-arrows is true")
    prev_icon: str=Field("$prev", description="Icon used for the “previous” button if show-arrows is true")
    disabled: Optional[bool] = Field(None, description="Determines if the window is disabled")
    # multiple: Optional[bool] = Field(None, description="Determines if multiple window items are allowed")
    triggerEvent: str = Field('update:modelValue', description="Trigger event for when to trigger a run")
