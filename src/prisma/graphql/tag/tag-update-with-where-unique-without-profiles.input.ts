import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { Type } from 'class-transformer';
import { TagUpdateWithoutProfilesInput } from './tag-update-without-profiles.input';

@InputType()
export class TagUpdateWithWhereUniqueWithoutProfilesInput {

    @Field(() => TagWhereUniqueInput, {nullable:false})
    @Type(() => TagWhereUniqueInput)
    where!: TagWhereUniqueInput;

    @Field(() => TagUpdateWithoutProfilesInput, {nullable:false})
    @Type(() => TagUpdateWithoutProfilesInput)
    data!: TagUpdateWithoutProfilesInput;
}
