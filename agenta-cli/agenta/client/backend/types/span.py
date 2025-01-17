# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ..core.pydantic_utilities import UniversalBaseModel
import typing
import datetime as dt
from .span_variant import SpanVariant
from .span_status_code import SpanStatusCode
from ..core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic
from ..core.pydantic_utilities import update_forward_refs


class Span(UniversalBaseModel):
    id: str
    name: str
    project_id: typing.Optional[str] = None
    parent_span_id: typing.Optional[str] = None
    created_at: dt.datetime
    variant: SpanVariant
    environment: typing.Optional[str] = None
    spankind: str
    status: SpanStatusCode
    metadata: typing.Dict[str, typing.Optional[typing.Any]]
    trace_id: str
    user_id: typing.Optional[str] = None
    content: typing.Dict[str, typing.Optional[typing.Any]]
    children: typing.Optional[typing.List["Span"]] = None

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(
            extra="allow", frozen=True
        )  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


update_forward_refs(Span)
