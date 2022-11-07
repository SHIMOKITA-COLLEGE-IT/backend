import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagCreateWithoutProfilesInput } from './tag-create-without-profiles.input';
import { Type } from 'class-transformer';
import { TagCreateOrConnectWithoutProfilesInput } from './tag-create-or-connect-without-profiles.input';
import { TagWhereUniqueInput } from './tag-where-unique.input';

@InputType()
export class TagUncheckedCreateNestedManyWithoutProfilesInput {

    @Field(() => [TagCreateWithoutProfilesInput], {nullable:true})
    @Type(() => TagCreateWithoutProfilesInput)
    create?: Array<TagCreateWithoutProfilesInput>;

    @Field(() => [TagCreateOrConnectWithoutProfilesInput], {nullable:true})
    @Type(() => TagCreateOrConnectWithoutProfilesInput)
    connectOrCreate?: Array<TagCreateOrConnectWithoutProfilesInput>;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    connect?: Array<TagWhereUniqueInput>;
}
